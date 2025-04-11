'use client'

import { useState } from "react"

type Instrument = {
  id: number
  name: string
  price: number
  like: number
  is_new: boolean
}

const InstrumentItem = ({
  instrument,
  index,
  onDelete
}: {
  instrument: Instrument,
  index: number,
  onDelete: (id: number) => void
}) => {
  return (
    <li className="my-2 flex justify-between items-center border-b py-2">
      <div>
        <p><strong>{index + 1}. {instrument.name}</strong> - ${instrument.price}</p>
        <p>Likes: {instrument.like} {instrument.is_new && <span className="text-green-500 ml-2">New!</span>}</p>
      </div>
      <button
        onClick={() => onDelete(instrument.id)}
        className="bg-red-500 text-white px-2 py-1 rounded-md ml-2"
      >
        Delete
      </button>
    </li>
  )
}

export default function MusicStore() {
  const [instruments, setInstruments] = useState<Instrument[]>([
    { id: 1, name: 'Fender Guitar', price: 300, like: 20, is_new: true },
    { id: 2, name: 'Piano', price: 450, like: 15, is_new: false },
    { id: 3, name: 'Double Bass', price: 800, like: 10, is_new: true },
  ])

  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [like, setLike] = useState('')
  const [isNew, setIsNew] = useState(false)

  const addInstrument = () => {
    if (!name || !price || !like) return
    const newInstrument: Instrument = {
      id: Date.now(),
      name,
      price: parseFloat(price),
      like: parseInt(like),
      is_new: isNew
    }
    setInstruments([...instruments, newInstrument])
    setName('')
    setPrice('')
    setLike('')
    setIsNew(false)
  }

  const deleteInstrument = (id: number) => {
    setInstruments(instruments.filter(inst => inst.id !== id))
  }

  return (
    <div className="max-w-md mx-auto p-4 border-2 rounded-lg">
      <h1 className="text-xl font-bold mb-4">Music Store</h1>
      <ul>
        {instruments.map((inst, index) => (
          <InstrumentItem
            key={inst.id}
            instrument={inst}
            index={index}
            onDelete={deleteInstrument}
          />
        ))}
      </ul>

      <h2 className="text-lg font-semibold mt-6">Add New Instrument</h2>
      <input value={name} onChange={e => setName(e.target.value)} placeholder="Name" className="block my-1 p-1 border" />
      <input value={price} onChange={e => setPrice(e.target.value)} placeholder="Price" className="block my-1 p-1 border" />
      <input value={like} onChange={e => setLike(e.target.value)} placeholder="Likes" className="block my-1 p-1 border" />
      <label className="block my-1">
        <input type="checkbox" checked={isNew} onChange={() => setIsNew(!isNew)} />
        <span className="ml-2">Is New?</span>
      </label>
      <button onClick={addInstrument} className="bg-blue-500 text-white px-4 py-1 rounded mt-2">Add</button>
    </div>
  )
}