import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";

export function getServerSideProps(ctx: GetServerSidePropsContext) {
    if (Math.random() > 0.5)
        throw new Error(
            "\n\nThis error was thrown in getServerSideProps.\nIf you are seeing this on the Netlify deployed site, this means that Netlify did not correctly use the custom error page in pages/_error.tsx!\n\n"
        );

    return {
        props: {},
    };
}

function Home({}: InferGetServerSidePropsType<typeof getServerSideProps>) {
    return (
        <>
            <h1>Next.js Error Repro demo</h1>
            <p>
                This is a simple app which reproduces an observed issue with
                netlify.
            </p>
            <p>
                This page has a 50% chance of throwing an error in its{" "}
                <code>getServerSideProps</code>. If you are seeing this, that
                means that didn&apos;t happen, so refresh a few times to see the
                error handling.
            </p>
            <p>
                Next.js supports creating a custom error page in{" "}
                <code>pages/_error.tsx</code> which will render in the case that
                there is an error while rendering the page. However, I have
                observed that Netlify does not use this file and instead shows
                the error JSON instead.
            </p>
        </>
    );
}

export default Home;
