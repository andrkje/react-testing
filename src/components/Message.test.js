import React from 'react';
import {shallow} from 'enzyme';
import Message from './Message';

const messageProps = {
    title: 'title',
    body: 'body',
}

it('Renders without any errors', () => {
    expect(
        shallow(
            <Message {...messageProps} />
        ).length
    ).toEqual(1)    // Would have length 0 if Message failed to render
})

describe('Message contains correct information upon rendering', () => {
    it('Contains correct title', () => {
        const wrapper = shallow(<Message {...messageProps}/>)
        expect(
            wrapper.find('h1').text()
        ).toEqual('title')
    })

    it('Contains correct body', () => {
        const wrapper = shallow(<Message {...messageProps}/>)
        expect(
            wrapper.find('#bodyText').text()
        ).toEqual('body')
    })

    it('Is liked by default button', () => {
        const wrapper = shallow(<Message {...messageProps}/>)
        expect(
            expect(
                wrapper.find('#likeButton').text()
            ).toEqual('👎')
        )
    })

    it('Has liked css class', () => {
        const wrapper = shallow(<Message {...messageProps}/>)
        expect(
            wrapper.find('div').hasClass('liked')
        ).toEqual(true)
    })
})


it('Dislike click change button symbol to like and change css class to disliked ', () => {
    const wrapper = shallow(<Message/>)

    wrapper.find('#likeButton').simulate('click')   // Simulates that the button is clicked

    expect(
        wrapper.find('#likeButton').text()
    ).toEqual('👍')

    expect(
        wrapper.find('div').hasClass('disliked')
    ).toEqual(true)
})
