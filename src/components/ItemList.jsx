function ItemList({ items, hapus, markdone, itemsDone, unmarkdone }) {
    return (
        <ul className="item-list">
            {items.length !== 0 ? <h3>Item yang ingin dibeli :</h3> : <h3>Item yang ingin dibeli : Kosong</h3>}
            {
                items.map((item) => (
                    <li key={item.id}> 
                        <span className="item-name">{item.nama}</span>
                        <div className="item-actions">
                            <button className="btn-delete" onClick={() => hapus(item.id, false)}>Delete</button>
                            <button className="btn-done" onClick={() => markdone(item.id)}>Done</button>
                        </div>
                    </li>
                ))
            }

            {itemsDone.length !== 0 ? <h3>Item yang sudah dibeli :</h3> : null}
            {
                itemsDone.map((item) => (
                    <li key={item.id}>
                        <span className="item-name">{item.nama}</span>
                        <div className="item-actions">
                            <button className="btn-delete" onClick={() => hapus(item.id, true)}>Delete</button>
                            <button className="btn-undo" onClick={() => unmarkdone(item.id)}>Undo</button>
                        </div>
                    </li>
                ))
            }
        </ul>
    )
}

export default ItemList;