import { Helmet } from "react-helmet";

const Meta = ({
  title = "B-Ballers Jersey Store - Ball like a pro",
  description = "Your favorite players jerseys at a fair rate",
  keywords = "nba, jerseys, kobe, bryant",
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keyword" content={keywords} />
    </Helmet>
  );
};

export default Meta;
