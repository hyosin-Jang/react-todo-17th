import styled from "styled-components"
import Lottie from "react-lottie-player"
import Popper from "../assets/party-popper.json"

const Animation = () => {
	return (
		<Wrapper>
			<Lottie
				loop
				animationData={Popper}
				play
			/>
		</Wrapper>
	)
}

export default Animation

const Wrapper = styled.div`
	position: fixed;
	left: 30%;
`
