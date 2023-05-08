import React, { Component } from "react";
import './slider.css'

// class Slider extends React.Component
class Slider extends Component {
    componentDidMount() {
        // 자바스크립트 입력
        const liList = document.querySelectorAll('.controller li');
        const pictureLi = document.querySelectorAll('.picture li');

        for (let i = 0; i < liList.length; i++) {
            liList[i].index = i;

            liList[i].onclick = (e) => {
                let n = e.currentTarget.index;

                for (let j = 0; j < liList.length; j++) {
                    if (j === n) {
                        liList[j].classList.add("on");
                        pictureLi[j].classList.add("active");
                    }
                    else {
                        liList[j].classList.remove("on");
                        pictureLi[j].classList.remove("active");
                    }
                }
            }
        }
    }

    render() {
        return (
            <div>
                <h3>slider</h3>
                <div className="container">
                    <ul className="controller">
                        <li className="on"></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                    <div className="picture">
                        <ul>
                            <li className="active"><img src="/images/work1.jpg" alt="" /></li>
                            <li><img src="/images/work2.jpg" alt="" /></li>
                            <li><img src="/images/work3.jpg" alt="" /></li>
                            <li><img src="/images/work4.jpg" alt="" /></li>
                            <li><img src="/images/work5.jpg" alt="" /></li>
                            <li><img src="/images/work6.jpg" alt="" /></li>
                        </ul>
                    </div>
                </div>
            </div >
        )
    }
}

export default Slider;