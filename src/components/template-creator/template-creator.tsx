import { DragDropContext } from 'react-beautiful-dnd'
import { LayoutOptions } from "./layout-options"
import { LayoutPreview } from "./layout-preview"

export const TemplateCreator = () => {
	return (
		<div className="flex w-full border border-red">
			<DragDropContext onDragEnd={console.log}>
				<LayoutOptions/>
				<LayoutPreview/>
			</DragDropContext>
		</div>
	)
}
