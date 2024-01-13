import { FlexTitle, FlexTitles } from "../../style/index.styles"
import { UseNewDate } from "../../hook/UseNewDate"
import { ButtonForm } from "../buttonForm/ButtonForm";

export const TitleApplication = () => {

  const { date } = UseNewDate();

  return (
    <>
      <FlexTitle >
        <FlexTitles>
          <h1>Kitchen Display System</h1>
          <div>
            <span>{date}</span>
          </div>
          <div>
            <ButtonForm></ButtonForm>
          </div>
        </FlexTitles>
      </FlexTitle>
    </>
  )
}
