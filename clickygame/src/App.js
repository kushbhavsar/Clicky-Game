import React, { Component } from 'react';
import './App.css';
import images from './images.json'
import Wrapper from './components/Wrapper'
import Navbar from './components/Navbar'
import Title from './components/Title'
import ImageCard from './components/ImageCard'

class App extends Component {
    state = {
        message: "Click an image to begin!",
        topScore: 0,
        curScore: 0,
        images: images,
        unselectedImage: images
    }

    componentDidMount() {
    }

    shuffleArray = array => {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    selectImage = breed => {
        const findImage = this.state.unselectedImage.find(item => item.breed === breed);

        if(findImage === undefined) {
            // failure to select a new dog
            this.setState({ 
                message: "You guessed incorrectly!",
                topScore: (this.state.curScore > this.state.topScore) ? this.state.curScore : this.state.topScore,
                curScore: 0,
                images: images,
                unselectedImage: images
            });
        }
        else {
            // success to select a new dog
            const newimage = this.state.unselectedImage.filter(item => item.breed !== breed);
            
            this.setState({ 
                message: "You guessed correctly!",
                curScore: this.state.curScore + 1,
                images: images,
                unselectedImage: newimage
            });
        }

        this.shuffleArray(images);
    };

    render() {
        return (
            <Wrapper>
                <Navbar
                    message={this.state.message}
                    curScore={this.state.curScore}
                    topScore={this.state.topScore}
                />
                <Title />
                {
                    this.state.images.map(image => (
                        <ImageCard
                            breed={image.breed}
                            image={image.image}
                            selectImage={this.selectImage} 
                            curScore={this.state.curScore}
                        />
                    ))
                }
            </Wrapper>
        );
    }
}

export default App;