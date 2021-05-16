import './App.css';
import CharacterComponent from "./Components/characterComponent";


function App() {
    return (
        <div>
            <CharacterComponent
                name={'Alina'}
                image={'https://i.pinimg.com/originals/f3/73/7e/f3737e27e9f5e7632204d4a90bd03a45.png'}
                description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet doloribus ducimus eaque, nisi obcaecati odit, pariatur quasi quia quos reprehenderit sequi soluta tenetur velit vero voluptatibus. Consectetur delectus iusto tenetur?'}/>
            <CharacterComponent
                name={'Anna'}
                image={'https://spar.org.ua/img.php?ipt=https://cdnimg.rg.ru/img/content/201/71/93/shcherbakova_d_850.jpg'}
                description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet doloribus ducimus eaque, nisi obcaecati odit, pariatur quasi quia quos reprehenderit sequi soluta tenetur velit vero voluptatibus. Consectetur delectus iusto tenetur?'}/>

        </div>
    );
}

export default App;
