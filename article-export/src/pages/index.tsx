import React, { ReactNode } from 'react';
import Head from 'next/head';
import {
    Button as MUIButton,
    Card,
    CardContent,
    Grid,
} from '@material-ui/core';
import { GetServerSideProps } from 'next';
import { Layout, Container, Title } from '../components';
import { PageType } from '../type';
import { API_URL } from '../lib/constants';
import styled from 'styled-components';

const PostCard = styled(Card)`
    margin-bottom: 1rem;
    padding: 1rem;
`;

const HomePage: PageType<{ data: string[] }> = ({ data }) => {
    // todo: react-query here

    return (
        <>
            <Head>
                <title>Export posts</title>
            </Head>

            <Container>
                <Title>Export posts</Title>
                {data.map(post => (
                    <PostCard key={post}>{post}</PostCard>
                ))}
            </Container>
        </>
    );
};

const renderBlogLayout = (children: ReactNode) => <Layout>{children}</Layout>;
HomePage.renderLayout = renderBlogLayout;

export default HomePage;

export const getServerSideProps: GetServerSideProps = async () => {
    const res = await fetch(`${API_URL}/posts`);
    const posts = await res.json();

    return {
        props: {
            data: posts.data,
        },
    };
};
