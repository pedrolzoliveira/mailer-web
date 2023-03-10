import { Droppable, Draggable } from "react-beautiful-dnd"
export const LayoutOptions = () => {
	return (
		<div className='p-4 w-full'>
			<button className="flex space-x-4 hover:cursor-pointer hover:bg-blue-100 p-4 rounded w-full">
				<div className="rounded border-4 border-blue-700 bg-blue-300 h-12 w-full"></div>
			</button>
			<button className="flex space-x-4 hover:cursor-pointer hover:bg-blue-100 p-4 rounded w-full">
				<div className="rounded border-4 border-blue-700 bg-blue-300 h-12 w-full"></div>
				<div className="rounded border-4 border-blue-700 bg-blue-300 h-12 w-full"></div>
			</button>
			<button className="flex space-x-4 hover:cursor-pointer hover:bg-blue-100 p-4 rounded w-full">
				<div className="rounded border-4 border-blue-700 bg-blue-300 h-12 w-full"></div>
				<div className="rounded border-4 border-blue-700 bg-blue-300 h-12 w-full"></div>
				<div className="rounded border-4 border-blue-700 bg-blue-300 h-12 w-full"></div>
			</button>
		</div>
	)
}
