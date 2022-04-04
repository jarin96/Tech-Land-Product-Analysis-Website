import React from 'react';
import { Card } from 'react-bootstrap';

const Blogs = () => {
    return (
        <div>
            <Card className="bg-dark text-white">
                <Card.Img src="https://images.unsplash.com/photo-1554050857-c84a8abdb5e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80" alt="Card image" />
                <Card.ImgOverlay>
                    <Card.Title>What is the purpose of context api?</Card.Title>
                    <Card.Text>
                        Context api is a easy way to create global varialbles that can be pass around in the React app and this is an alternative to props drilling.

                        Context api mainly take steps to pass data from the component tree without having to pass the same props from component to component down manually at every level.

                        Context api is mainly used when the data needs to be pass by many components at different nesting levels.
                    </Card.Text>
                    <Card.Title>What is semantic tag?</Card.Title>
                    <Card.Text>
                        Semantic tag is a one kind of HTML tags that provide information about the contents of these tags like Header ,
                        that goes beyond on the page as it is.
                        Semantic tags are mainly the main part of the body tags.
                        By adding semantic tag to your web page you provide additional intelligence that helps google to understand the roles and importance of the different portion of your web page.
                        Those are some of the semantic tags example Header,Footer,nav,article,section.
                        When a page is designed, without semantic tag it is really difficult to identify the various parts of a web page.

                        But when a page is designed with various semantic tags it is really easy to find the various parts of the page at a glance.
                    </Card.Text>
                    <Card.Title>What is the difference between Inline-block and Inline-block elements?</Card.Title>
                    <Card.Text>
                        Inline block treats like other inline elements but also allows the useages of block properties.Block takes as mush width as they needed and start with a new line.

                        Inline block elements are same as inline elements but they can also use padding and margins added on all four sides.
                        A block level elements takes full width of the page by default.
                        Even if there is a page the block level elements each starts with a new line.

                        We can set an block level element with an height property, and width property.The example for block level element are
                        div, p, h1, ui, footer.

                        A inline element can be placed side by side.And a inline element takes space as much as they needed.
                        Like block elements we can not set height and weight property for inline element.
                    </Card.Text>
                </Card.ImgOverlay>
            </Card>
        </div>
    );
};

export default Blogs;