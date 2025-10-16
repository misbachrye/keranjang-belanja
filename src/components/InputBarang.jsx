import { useState } from "react";

function InputBarang({addItem}) {
    const [text, setText] = useState("")

    function TambahBarangHandler(event) {
        event.preventDefault();
        if (!text.trim()) return;
        addItem(text);
        setText('');
    }

    return (
        <form className="input-form" onSubmit={TambahBarangHandler}>
            <input 
              className="item-input"
              type="text" 
              value={text} 
              placeholder="Masukkan nama barang..."
              onChange={(event) => setText(event.target.value)}
            />
            <button className="btn-add" type="submit">Tambah</button>
        </form>
    )
}

export default InputBarang;