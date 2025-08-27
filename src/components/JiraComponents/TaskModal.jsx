import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import '../../styles/JiraModal.css';

export default function JiraModal({ onClose, onSubmit }) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            title: '',
            description: '',
            type: 'Задача',
            priority: 'Низкая',
            deadline: '',
            tags: '',
        },
    });

    const [images, setImages] = useState([]);

    const handleFormSubmit = (data) => {
        const tagsArray = data.tags ? data.tags.split(',').map(t => t.trim()).filter(t => t) : [];
        onSubmit({ ...data, tags: tagsArray, images, createdAt: new Date().toISOString() });
    };

    const handleImages = (e) => {
        const files = Array.from(e.target.files);
        Promise.all(files.map(file => {
            return new Promise((res, rej) => {
                const reader = new FileReader();
                reader.onload = () => res(reader.result);
                reader.onerror = rej;
                reader.readAsDataURL(file);
            });
        })).then(imgs => setImages(imgs));
    };

    return (
        <div className="modal-backdrop">
            <div className="modal">
                <h2>Новая карточка</h2>
                <form onSubmit={handleSubmit(handleFormSubmit)} className="modal-form">
                    <input
                        type="text"
                        placeholder="Название"
                        {...register('title', { required: 'Название обязательно' })}
                    />
                    {errors.title && <span className="error">{errors.title.message}</span>}

                    <textarea
                        placeholder="Описание"
                        {...register('description', { required: 'Описание обязательно' })}
                    />
                    {errors.description && <span className="error">{errors.description.message}</span>}

                    <select {...register('type', { required: 'Выберите тип' })}>
                        <option>Задача</option>
                        <option>Баг</option>
                        <option>Фича</option>
                    </select>
                    {errors.type && <span className="error">{errors.type.message}</span>}

                    <select {...register('priority', { required: 'Выберите приоритет' })}>
                        <option>Низкая</option>
                        <option>Средняя</option>
                        <option>Высокая</option>
                    </select>
                    {errors.priority && <span className="error">{errors.priority.message}</span>}

                    <input
                        type="date"
                        {...register('deadline', {
                            required: 'Дата дедлайна обязательна',
                            validate: {
                                validFormat: (value) => {
                                    const match = value.match(/^(\d{4})-(\d{2})-(\d{2})$/);
                                    if (!match) return 'Неверный формат даты';
                                    const year = parseInt(match[1], 10);
                                    if (year > 9999) return 'Год не может быть больше 4 цифр';
                                    return true;
                                },
                            },
                        })}
                    />
                    {errors.deadline && <span className="error">{errors.deadline.message}</span>}

                    <input
                        type="text"
                        placeholder="Теги через запятую"
                        {...register('tags')}
                    />

                    <input
                        type="file"
                        multiple
                        accept="image/*"
                        onChange={handleImages}
                    />
                    {images.length > 0 && (
                        <div className="preview-images">
                            {images.map((img, idx) => (
                                <img key={idx} src={img} alt={`img-${idx}`} className="preview-img" />
                            ))}
                        </div>
                    )}

                    <div className="modal-buttons">
                        <button type="submit" className="modal-submit">Создать</button>
                        <button type="button" className="modal-cancel" onClick={onClose}>Отмена</button>
                    </div>
                </form>
            </div>
        </div>
    );
}