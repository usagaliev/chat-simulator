import * as React from 'react'
import {Button} from "@material-tailwind/react";

const UiButton = ({ onClick }) => {
	return <Button className="button" onClick={onClick}>Send</Button>;
}

export default UiButton;

