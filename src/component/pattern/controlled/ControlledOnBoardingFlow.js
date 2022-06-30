import React, {useState} from 'react';

const ControlledOnBoardingFlow = ({ children, onFinish, currentIndex, onNext }) => {

    const goToNext = stepData => {
        onNext(stepData);
    }

    // React.Children.toArray() : https://fe-developers.kakaoent.com/2021/211022-react-children-tip/
    const currentChild = React.Children.toArray(children)[currentIndex];

    // isValidElement : https://webisfree.com/2020-08-26/[react]-%EB%A6%AC%EC%95%A1%ED%8A%B8-%EC%9A%94%EC%86%8C-%EA%B2%80%EC%A6%9D%ED%95%98%EA%B8%B0-isvalidelement
    if (React.isValidElement(currentChild)) {

        // React.cloneElement : https://developer-talk.tistory.com/233
        return React.cloneElement(currentChild, { goToNext });
    }

    return currentChild
};

export default ControlledOnBoardingFlow;