import * as React from "react";
import Header from "../../components/Header/Header";
import Viewer from "../../components/Viewer/Viewer";
import AsyncLoading from "../../components/AsyncLoading/AsyncLoading";

import { IAppProps } from "./IAppProps";

export default class App extends React.Component<IAppProps, {}> {
    public static defaultProps: IAppProps = {
        name: "TypeScript Card Types demo"
    };
    public render() {
        const article = {
            date: new Date().toLocaleDateString("en-GB").replace(/\//g, "."),
            imageSrc: "http://pipsum.com/900x450.jpg",
            linkUrl: "https://blog.josequinto.com/",
            summary: "Lorem, ipsum dolor sit amet, consectetur adipiscing elit. Duis at purus nibh. Cras metus nulla, vestibulum in auctor ac, fermentum vitae tellus. Donec sed aliquam nisl. Sed eu leo id est pretium euismod. Nulla id justo at mi venenatis volutpat. Fusce nisi leo, placerat id condimentum a, accumsan vitae tortor. Nunc magna nunc, venenatis nec elementum eu, ultrices in sem. Maecenas tincidunt semper molestie. Nulla nec neque sit amet libero molestie feugiat. Cras id metus velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis arcu non leo porta ut euismod ante luctus. Praesent elementum sodales dolor id scelerisque.</p><p>Nam vitae cursus massa. Nunc ut arcu a mi convallis feugiat. Sed ante sem, sollicitudin sed porta et, molestie in turpis. Nulla lacinia lacus nec ligula feugiat eget sagittis metus lobortis. Aenean eget velit leo, et euismod risus. Pellentesque molestie hendrerit velit at gravida. Integer nec mauris urna, vel gravida est.</p><p>Etiam sed velit tellus, eget aliquam nisi. Suspendisse potenti. Duis at augue purus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper sapien congue lorem tristique nec bibendum velit tincidunt. Maecenas faucibus sollicitudin arcu, sed tincidunt nunc fermentum ac. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam felis turpis, rutrum nec tincidunt nec, imperdiet quis tortor. Sed sit amet arcu vel orci porttitor elementum.</p><p>Vivamus eu elit augue. Donec viverra vehicula fermentum. Curabitur vitae tellus id mi sodales posuere vel cursus ligula. Proin quis risus arcu. Etiam purus dui, laoreet at mattis non, pretium et orci. Ut nec rhoncus neque. Aenean id risus ac neque congue suscipit. Sed bibendum quam nec felis aliquet in tempus enim adipiscing.</p><p>Aenean libero sem, ornare sed adipiscing quis, blandit a nibh. Proin quis sem urna. Vivamus id neque turpis. Aliquam erat volutpat. Curabitur magna nisl, mollis imperdiet interdum in, fringilla id urna. Phasellus vel blandit lacus. Proin lacus lacus, sodales in sodales id, tincidunt ac metus. Nunc rutrum risus id enim varius luctus sagittis lectus porta. Nunc eu imperdiet nibh. Etiam sit amet mi ac quam facilisis pharetra ac eget ligula. Maecenas pretium, est sed tincidunt tincidunt, dolor tortor tristique justo, in placerat enim est eu ante.</p><p>Ut at lorem ut diam molestie laoreet. Donec ut nibh ac risus euismod semper a ut metus. Phasellus faucibus dapibus felis, viverra tincidunt felis pellentesque posuere. Nunc tristique, quam ut mattis commodo, dolor eros commodo orci, sit amet mattis metus augue ut neque. Sed vehicula scelerisque tincidunt. Nulla lobortis",
            title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at purus nibh. Cras metus nulla, vestibulum in auctor ac Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet."
        };

        return (
            <div>
                <Header title={this.props.name} />
                 <AsyncLoading />
                <Viewer id={"1"} article={article} />
            </div>
        );
    }
}
