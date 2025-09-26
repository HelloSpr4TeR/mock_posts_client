import React from 'react'


const Training = ({ tree }) => {
    if (!tree) return null

    return (
        <ul>
            <li>
                {tree.name}
                {tree.children.length > 0 &&
                    tree.children.map(child => (
                        <Training key={child.id} tree={child} />
                    ))}
            </li>
        </ul>
    )
}

export default Training