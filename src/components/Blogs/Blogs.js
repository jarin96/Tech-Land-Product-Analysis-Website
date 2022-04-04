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
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora obcaecati necessitatibus, debitis voluptatibus molestias ut asperiores, eius adipisci pariatur ipsa velit doloremque aspernatur nemo magni, rerum perferendis soluta ratione delectus! Laudantium, eaque unde. Consequuntur pariatur maiores aspernatur. Ipsa, cupiditate ex eligendi eum nostrum voluptates, corporis hic commodi doloribus consequatur magni ea vel architecto velit itaque? Id consectetur eligendi porro quod asperiores corporis, aliquam consequatur? Ex cum laborum, magnam est iure corrupti neque libero temporibus in error deleniti nihil totam dolorem ipsam quibusdam, sint quos quia, vero molestias placeat enim consectetur eum dicta soluta? Est culpa, itaque optio error provident maiores?
                    </Card.Text>
                    <Card.Title>What is semantic tag?</Card.Title>
                    <Card.Text>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora obcaecati necessitatibus, debitis voluptatibus molestias ut asperiores, eius adipisci pariatur ipsa velit doloremque aspernatur nemo magni, rerum perferendis soluta ratione delectus! Laudantium, eaque unde. Consequuntur pariatur maiores aspernatur. Ipsa, cupiditate ex eligendi eum nostrum voluptates, corporis hic commodi doloribus consequatur magni ea vel architecto velit itaque? Id consectetur eligendi porro quod asperiores corporis, aliquam consequatur? Ex cum laborum, magnam est iure corrupti neque libero temporibus in error deleniti nihil totam dolorem ipsam quibusdam, sint quos quia, vero molestias placeat enim consectetur eum dicta soluta? Est culpa, itaque optio error provident maiores?
                    </Card.Text>
                </Card.ImgOverlay>
            </Card>
        </div>
    );
};

export default Blogs;