export default function JiraColumn({ id, title, onRemove, onAddCard, children, showAdd }) {
    return (
        <div className="jira-col">
            <div className="jira-col-header">
                <h2 className="jira-col-title">{title}</h2>
                <div className="jira-col-actions">
                    {showAdd && (
                        <button onClick={onAddCard} className="jira-col-add">
                            ＋
                        </button>
                    )}
                    <button onClick={() => onRemove(id)} className="jira-col-del">
                        ✕
                    </button>
                </div>
            </div>
            <div className="jira-col-body">{children}</div>
        </div>
    );
}