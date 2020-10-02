import React, { ReactNode, useCallback } from 'react';
import { useQuery } from 'react-query';
import Head from 'next/head';
import { Button } from '@material-ui/core';
import styled from 'styled-components';
import { Layout, Container, Title, Link, Box } from '../../components';
import { PageType } from '../../type';
import { API_URL } from '../../lib/constants';
import { useRouter } from 'next/router';
import copy from 'copy-to-clipboard';

export const Result = styled.div`
    border: 1px solid lightgray;
    border-radius: 2px;
    padding: 1rem;
    overflow-y: auto;
    position: relative;
    margin-top: 2rem;
`;

export const ResultData = styled.pre``;

export const Copy = styled.button`
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    padding: 0.5rem 1rem;
    border-radius: 2px;
    background-color: #cccccc;
    border: 0 none;
    appearance: none;
    cursor: pointer;
`;

const PostPage: PageType = () => {
    // todo: react-query here?

    const router = useRouter();
    const { id } = router.query;

    const exportQuery = useCallback(() => {
        return fetch(`${API_URL}/post/${id}`).then(res => res.json());
    }, [id]);

    const { isLoading, error, data, refetch } = useQuery(
        'export',
        exportQuery,
        {
            refetchOnWindowFocus: false,
            enabled: false,
        },
    );

    const onCopyClick = useCallback(() => {
        copy(data.data);
    }, [data]);

    return (
        <>
            <Head>
                <title>Export post</title>
            </Head>

            <Container>
                <Link href="/">&larr; Back</Link>
                <Title>Export post</Title>

                <Box marginTop={1}>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={() => {
                            refetch();
                        }}
                    >
                        To Dev.to
                    </Button>
                </Box>

                {!isLoading && !!data && (
                    <Result>
                        <Copy onClick={onCopyClick}>Copy</Copy>
                        <ResultData>{data.data}</ResultData>
                    </Result>
                )}
            </Container>
        </>
    );
};

const renderBlogLayout = (children: ReactNode) => <Layout>{children}</Layout>;
PostPage.renderLayout = renderBlogLayout;

export default PostPage;
