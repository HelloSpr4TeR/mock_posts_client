import { useState, useEffect } from "react";
import "../styles/MiniJira.css";
import JiraColumn from "../components/JiraComponents/JiraColumn";
import JiraCard from "../components/JiraComponents/JiraCard";
import TaskModal from "../components/JiraComponents/TaskModal";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

export default function MiniJira() {
    const [columns, setColumns] = useState([]);
    const [title, setTitle] = useState("");
    const [cards, setCards] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const savedCols = localStorage.getItem("mini-jira-columns");
        const savedCards = localStorage.getItem("mini-jira-cards");
        if (savedCols) setColumns(JSON.parse(savedCols));
        if (savedCards) setCards(JSON.parse(savedCards));
    }, []);

    useEffect(() => {
        localStorage.setItem("mini-jira-columns", JSON.stringify(columns));
    }, [columns]);

    useEffect(() => {
        localStorage.setItem("mini-jira-cards", JSON.stringify(cards));
    }, [cards]);

    const addColumn = (e) => {
        e.preventDefault();
        if (!title.trim()) return;
        const newCol = { id: Date.now(), title };
        setColumns([...columns, newCol]);
        setTitle("");
    };

    const removeColumn = (id) => {
        setColumns(columns.filter((col) => col.id !== id));
        setCards(cards.filter((card) => card.columnId !== id));
    };

    const addCard = (task) => {
        if (!columns.length) return;
        const newCard = {
            id: Date.now(),
            columnId: columns[0].id,
            index: cards.filter(c => c.columnId === columns[0].id).length,
            ...task
        };
        setCards([...cards, newCard]);
    };

    const removeCard = (id) => {
        setCards(cards.filter((card) => card.id !== id));
    };

    const onDragEnd = (result) => {
        const { source, destination } = result;
        if (!destination) return;

        setCards(prevCards => {
            if (source.droppableId === destination.droppableId && source.index === destination.index) {
                return prevCards;
            }

            const newCards = Array.from(prevCards);

            const sourceColumnCards = newCards
                .filter(c => c.columnId?.toString() === source.droppableId)
                .sort((a, b) => a.index - b.index);

            const movedCard = sourceColumnCards[source.index];
            if (!movedCard) return prevCards;

            sourceColumnCards.splice(source.index, 1);

            if (source.droppableId !== destination.droppableId) {
                movedCard.columnId = parseInt(destination.droppableId);

                const destColumnCards = newCards
                    .filter(c => c.columnId?.toString() === destination.droppableId)
                    .sort((a, b) => a.index - b.index);

                destColumnCards.splice(destination.index, 0, movedCard);

                destColumnCards.forEach((c, idx) => c.index = idx);
                sourceColumnCards.forEach((c, idx) => c.index = idx);

                return newCards.map(c => {
                    const inSource = sourceColumnCards.find(sc => sc.id === c.id);
                    const inDest = destColumnCards.find(dc => dc.id === c.id);
                    return inSource || inDest || c;
                });
            }

            sourceColumnCards.splice(destination.index, 0, movedCard);
            sourceColumnCards.forEach((c, idx) => c.index = idx);

            return newCards.map(c => {
                const inSource = sourceColumnCards.find(sc => sc.id === c.id);
                return inSource || c;
            });
        });
    };

    return (
        <div className="jira">
            <form onSubmit={addColumn} className="jira-form">
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Название колонки"
                    className="jira-input"
                />
                <button type="submit" className="jira-btn">Добавить</button>
            </form>

            <DragDropContext onDragEnd={onDragEnd}>
                <div className="jira-columns">
                    {columns.map((col, index) => {
                        const colIdStr = col.id != null ? col.id.toString() : "0";

                        const colCards = cards
                            .filter(c => c.columnId != null && c.columnId.toString() === colIdStr)
                            .sort((a, b) => (a.index ?? 0) - (b.index ?? 0));

                        return (
                            <Droppable droppableId={colIdStr} key={colIdStr}>
                                {(provided, snapshot) => (
                                    <div
                                        ref={provided.innerRef}
                                        {...provided.droppableProps}
                                        style={{
                                            border: snapshot.isDraggingOver ? "2px solid #2563eb" : "2px solid transparent",
                                            borderRadius: "8px",
                                            transition: "border 0.2s ease",
                                        }}
                                    >
                                        <JiraColumn
                                            id={col.id}
                                            title={col.title}
                                            onRemove={removeColumn}
                                            onAddCard={() => setIsModalOpen(true)}
                                            showAdd={index === 0}
                                        >
                                            {colCards.map((card, idx) => {
                                                const cardIdStr = card.id != null ? card.id.toString() : `card-${idx}`;
                                                return (
                                                    <Draggable key={cardIdStr} draggableId={cardIdStr} index={idx}>
                                                        {(provided) => (
                                                            <div
                                                                ref={provided.innerRef}
                                                                {...provided.draggableProps}
                                                                {...provided.dragHandleProps}
                                                                style={{
                                                                    ...provided.draggableProps.style,
                                                                    cursor: "grab",
                                                                }}
                                                            >
                                                                <JiraCard card={card} onRemove={() => removeCard(card.id)} />
                                                            </div>
                                                        )}
                                                    </Draggable>
                                                );
                                            })}
                                            {provided.placeholder}
                                        </JiraColumn>
                                    </div>
                                )}
                            </Droppable>
                        );
                    })}
                </div>
            </DragDropContext>

            {isModalOpen && (
                <TaskModal
                    onClose={() => setIsModalOpen(false)}
                    onSubmit={(task) => {
                        addCard(task);
                        setIsModalOpen(false);
                    }}
                />
            )}
        </div>
    );
}