// eslint-disable-next-line react/prop-types
export const Section = ({ children, className = '' }) => {
    return <section className={` ${className}`}>{children}</section>;
};
