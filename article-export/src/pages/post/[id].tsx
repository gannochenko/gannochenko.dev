import React, { ReactNode } from 'react';
import Head from 'next/head';
import { Button, Card } from '@material-ui/core';
import { Layout, Container, Title, Link, Box } from '../../components';
import { PageType } from '../../type';
import { API_URL } from '../../lib/constants';

const PostPage: PageType<{ data: string[] }> = props => {
    // todo: react-query here

    console.log(props);

    return (
        <>
            <Head>
                <title>Export post</title>
            </Head>

            <Container>
                <Link href="/">&larr; Back</Link>
                <Title>Export post</Title>

                <Box marginTop={1}>
                    <Button variant="contained" color="primary">
                        To Dev.to
                    </Button>
                </Box>
            </Container>
        </>
    );
};

const renderBlogLayout = (children: ReactNode) => <Layout>{children}</Layout>;
PostPage.renderLayout = renderBlogLayout;

export default PostPage;
