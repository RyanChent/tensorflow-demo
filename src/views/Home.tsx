import React from "react";
import { Button } from 'antd'
import { Link } from "react-router-dom";

const Home: React.FC = (props) => {
  return <section className="tf-dashboard">
    <Button type="primary">
        <Link to="/">返回首页</Link>
    </Button>
  </section>
}

export default Home