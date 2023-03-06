

const Switcher = ({onChange, value}) => {
	return (
		<div>
			<input type="checkbox" onChange={onChange} />
			<span>{value}</span>
		</div>
	)
}

export default Switcher