import { useLocation, useNavigate, useParams } from 'react-router-dom';

const withRouter = Component => props => {
  const location = useLocation();
  const navigate = useNavigate();
  const params = useParams();
  const router = { location, navigate, params };

  return <Component {...props} {...router} />;
};

export default withRouter;
