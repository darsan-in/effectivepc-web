import { careerMail } from "./reusable/contact-info";
import PopOverTrigger from "./reusable/popover-trigger";

export default function CareerBtn() {
	return (
		<PopOverTrigger
			TriggerElem={
				<button className="text-gray-300 hover:text-gray-400 nav-btn">
					<span className="glow"></span>
					<span className="nav-btn-content">Career</span>
				</button>
			}
			ContentElem={
				<>
					<p className="text-[14px]">
						Send your resume to{" "}
						<span className="font-bold">{careerMail}</span>
					</p>
				</>
			}
			contentContainerClassNames="flex-col bg-black/[40%] text-tw text-sm leading-loose font-light text-center"
			contentWidth="220px"
		/>
	);
}
