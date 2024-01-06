// ListItem.jsx
import { useState } from 'react';
import Markdown from 'react-markdown'

const ListItem = ({ header, content, collapsable }) => {
    const [isCollapsed, setIsCollapsed] = useState(true);
    const toggle = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <div className="flex flex-col p-2 border-b">
            <div className="flex items-center">
                <input type="checkbox" className="form-checkbox h-5 w-5" />
                <span className="flex-grow ml-2 font-medium">{header}</span>
                {collapsable && (
                    <button className="ml-2" onClick={toggle}>
                        <span>{isCollapsed ? '▼' : '▲'}</span>
                    </button>
                )}
            </div>
            {!isCollapsed && (
                <article className="prose">
                    <Markdown>{content}</Markdown>
                </article>
            )}
        </div>
    );
};

export default ListItem;