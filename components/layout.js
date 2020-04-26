import { Row, Col } from "antd";
import stylesheet from "antd/dist/antd.min.css";

const Layout = ({ children }) => {
  return (
    <div>
      <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
      <Row>
        <Col span={24}>{children}</Col>
      </Row>
    </div>
  );
};

export default Layout;
