type Layout = Array<{
	columns: 1 | 2 | 3
}>

const layout: Layout = [
	{ columns: 2 },
	{ columns: 1 },
	{ columns: 3 },
]

export const LayoutPreview = () => {
	return (
		<div className="w-full border"></div>
	)
}
