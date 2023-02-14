import { FC } from "react"
import { Provider } from 'react-redux'
import Portfolio from "src/page/Portfolio"
import store from "./store"

const App: FC = () => {
    return (
        <Provider store={store}>
            <div id={"root-modal"} />
            <Portfolio />
        </Provider>
    )
}
export default App

