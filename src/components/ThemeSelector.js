import useTheme from "../hooks/useTheme"
import "./ThemeSelector.css"
import modeIcon from "../assets/modeIcon.svg"

const ThemeSelector = () => {
    const colors = ["#58249c", "orangered", "blue"]
    const {changeColor, changeMode, mode} = useTheme()

    const toggleMode = () =>{
        changeMode(mode === "dark" ? "light": "dark")
    }
    console.log(mode)
  return (
    <div className="theme-selector">
        <div className="toggle-mode">
            <img
                src={modeIcon}
                alt="mode toggle"
                style ={{filter: mode==="dark" ? "invert(100%)" : "invert(20%)" }}
                onClick = {toggleMode}
                className = "toggle-mode-icon"
            />
        </div>
        <div className="theme-buttons">
            {
                colors.map(color => (
                    <div 
                        key={color}
                        style={{background: color}}
                        onClick ={ ()=> changeColor(color) }
                    />
                ))
            }

        </div>
    </div>
  )
}

export default ThemeSelector