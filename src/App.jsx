import Container from './components/Container';

function App() {
    return (
        <div className="m-5 font-mono">
            <h1 className="text-5xl text-center text-gray-300 font-bold [text-shadow:_0_7px_0_rgb(255_255_255_/_15%)]  mb-5">
                Budget Tracker App
            </h1>
            <div>
                <Container />
            </div>
        </div>
    );
}

export default App;
