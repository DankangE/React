import { useParams } from 'react-router-dom'

const Articles = () => {
    const { id } = useParams();
  return (
    <div>
      <h2>게시글 {id}번</h2>
    </div>
  );
};

export default Articles;