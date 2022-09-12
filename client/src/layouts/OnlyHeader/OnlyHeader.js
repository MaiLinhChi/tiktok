import Headers from '~/layouts/components/Header';

const OnlyHeader = () => {
    return (
        <div className="container">
            <Headers />
            <div className="content">Content</div>
        </div>
    );
};

export default OnlyHeader;
