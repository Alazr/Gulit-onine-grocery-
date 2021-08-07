import React from 'react';
import styled from 'styled-components';



function Loader(props) {
    return (
        <LoaderContainer>
           <Loading className="loadingio-spinner-spinner-worrf2r68up"><div className="ldio-0wh2hfvubtp">
                    <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                        </div></Loading>
        </LoaderContainer>
    );
}

const LoaderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 2rem;
`

const Loading = styled.div`
@keyframes ldio-0wh2hfvubtp {
  0% { opacity: 1 }
  100% { opacity: 0 }
}
.ldio-0wh2hfvubtp div {
  left: 96.53px;
  top: 69.935px;
  position: absolute;
  animation: ldio-0wh2hfvubtp linear 0.8695652173913042s infinite;
  background: #00c23d;
  width: 3.94px;
  height: 17.73px;
  border-radius: 1.97px / 3.3687px;
  transform-origin: 1.97px 28.565px;
}.ldio-0wh2hfvubtp div:nth-child(1) {
  transform: rotate(0deg);
  animation-delay: -0.8115942028985506s;
  background: #00c23d;
}.ldio-0wh2hfvubtp div:nth-child(2) {
  transform: rotate(24deg);
  animation-delay: -0.7536231884057969s;
  background: #00c23d;
}.ldio-0wh2hfvubtp div:nth-child(3) {
  transform: rotate(48deg);
  animation-delay: -0.6956521739130433s;
  background: #00c23d;
}.ldio-0wh2hfvubtp div:nth-child(4) {
  transform: rotate(72deg);
  animation-delay: -0.6376811594202897s;
  background: #00c23d;
}.ldio-0wh2hfvubtp div:nth-child(5) {
  transform: rotate(96deg);
  animation-delay: -0.5797101449275361s;
  background: #00c23d;
}.ldio-0wh2hfvubtp div:nth-child(6) {
  transform: rotate(120deg);
  animation-delay: -0.5217391304347825s;
  background: #00c23d;
}.ldio-0wh2hfvubtp div:nth-child(7) {
  transform: rotate(144deg);
  animation-delay: -0.4637681159420289s;
  background: #00c23d;
}.ldio-0wh2hfvubtp div:nth-child(8) {
  transform: rotate(168deg);
  animation-delay: -0.4057971014492753s;
  background: #00c23d;
}.ldio-0wh2hfvubtp div:nth-child(9) {
  transform: rotate(192deg);
  animation-delay: -0.3478260869565217s;
  background: #00c23d;
}.ldio-0wh2hfvubtp div:nth-child(10) {
  transform: rotate(216deg);
  animation-delay: -0.28985507246376807s;
  background: #00c23d;
}.ldio-0wh2hfvubtp div:nth-child(11) {
  transform: rotate(240deg);
  animation-delay: -0.23188405797101444s;
  background: #00c23d;
}.ldio-0wh2hfvubtp div:nth-child(12) {
  transform: rotate(264deg);
  animation-delay: -0.17391304347826084s;
  background: #00c23d;
}.ldio-0wh2hfvubtp div:nth-child(13) {
  transform: rotate(288deg);
  animation-delay: -0.11594202898550722s;
  background: #00c23d;
}.ldio-0wh2hfvubtp div:nth-child(14) {
  transform: rotate(312deg);
  animation-delay: -0.05797101449275361s;
  background: #00c23d;
}.ldio-0wh2hfvubtp div:nth-child(15) {
  transform: rotate(336deg);
  animation-delay: 0s;
  background: #00c23d;
}
.loadingio-spinner-spinner-worrf2r68up {
  width: 197px;
  height: 197px;
  display: inline-block;
  overflow: hidden;
  background: #ffffff;
}
.ldio-0wh2hfvubtp {
  width: 100%;
  height: 100%;
  position: relative;
  transform: translateZ(0) scale(1);
  backface-visibility: hidden;
  transform-origin: 0 0; /* see note above */
}
.ldio-0wh2hfvubtp div { box-sizing: content-box; }
`

export default Loader;
