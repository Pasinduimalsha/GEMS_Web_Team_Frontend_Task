import styled from '@emotion/styled';
import logo from '../Image/Picture2.jpg';

const Loading = () => {
  return (
    <Style>
      <div className="loading-container">
        <div className="dots-generator">
          <img src={logo} alt='logo' className="rotating-logo" />
        </div>
      </div>
    </Style>
  );
};

export default Loading;

const Style = styled.div`
  .loading-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(60deg, #000000 0%, #350101 100%);
  }

  .dots-generator {
    width: 150px;
    height: 150px;
  }

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  .rotating-logo {
    animation: rotate 2s linear infinite;
  }
`;
