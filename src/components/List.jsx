function List({ title, children }) { // Use destructuring to get props
    return (
        <div className="max-w-sm mx-auto bg-white rounded-lg shadow-md overflow-hidden">
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{title}</div>
                {children}
            </div>
        </div>
    );
}

export default List;
