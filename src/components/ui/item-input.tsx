export function ItemInput() {
  return (
    <div className="has-[input:focus]:text-purple-light flex flex-col gap-2">
      <label htmlFor="item">Item</label>
      <input
        className="text-sm h-10 leading-none text-gray-100 rounded-md outline-none border border-1 border-gray-300 bg-gray-500 p-3 focus:border-purple-light"
        id="item"
        type="text"
      />
    </div>
  )
}