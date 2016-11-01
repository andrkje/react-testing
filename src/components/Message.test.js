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
    ).toEqual(1)
})

describe('Message contains correct information', () => {
    it('contains correct title', () => {
        const wrapper = shallow(<Message {...messageProps}/>)
        expect(
            wrapper.find('h1').text()
        ).toEqual('title')
    })

    it('contains correct body', () => {
        const wrapper = shallow(<Message {...messageProps}/>)
        expect(
            wrapper.find('#bodyText').text()
        ).toEqual('body')
    })

    it('is liked by default button', () => {
        const wrapper = shallow(<Message {...messageProps}/>)
        expect(
            expect(
                wrapper.find('#likeButton').text()
            ).toEqual('👎')
        )
    })

    it('is liked by default css', () => {
        const wrapper = shallow(<Message {...messageProps}/>)
        expect(
            wrapper.find('div').hasClass('liked')
        ).toEqual(true)
    })
})


describe('dislike', () => {
    it('dislike ', () => {
        const wrapper = shallow(<Message/>)

        wrapper.find('#likeButton').simulate('click')

        expect(
            wrapper.find('#likeButton').text()
        ).toEqual('👍')
        expect(
            wrapper.find('div').hasClass('disliked')
        ).toEqual(true)
    })
})
