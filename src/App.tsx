
import FormModal from "./components/form/FormModal"
import { KitchenDisplaySystem } from "./components/systemDisplay/KitchenDisplaySystem"
import { TitleApplication } from "./components/title/TitleApplication"
import { FlexMainContainer } from "./style/index.styles"


function App() {

  return (
    <>
      <FlexMainContainer>
        <TitleApplication />
        <KitchenDisplaySystem />
      </FlexMainContainer>
      <FormModal />
    </>
  )
}

export default App
