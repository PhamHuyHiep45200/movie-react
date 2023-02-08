import React from 'react'
import { Col, Image, Row } from "antd";
import { Carousel } from "antd";

function Phim() {
  return (
    <div className="w-full">
      <Row>
        <Col span={24}>
          <Carousel autoplaySpeed={1000} autoplay>
            <div>
              <Image preview={false} src="https://files.betacorp.vn/files/ecm/2023/01/26/1702x621-103655-260123-32.png" />
            </div>
            <div>
              <Image preview={false} src="https://files.betacorp.vn/files/ecm/2023/01/22/untitled-2-150326-220123-69.jpg" />
            </div>
            <div>
              <Image preview={false} src="https://files.betacorp.vn/files/ecm/2023/01/03/1702x621-171108-030123-22.jpg" />
            </div>
          </Carousel>
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <Image
            width={150}
            height={200}
            src="https://files.betacorp.vn/files/media%2fimages%2f2023%2f01%2f04%2f321986917-1318882765574216-8856448085308688207-n-copy-122426-040123-97-183645-040123-51.jpg"
          />
          <div>Phim 1</div>
        </Col>
        <Col span={12}>
          <Image
            width={150}
            height={200}
            src="https://files.betacorp.vn/files/media%2fimages%2f2023%2f01%2f04%2f0016690-0-copy-114444-040123-22-183813-040123-79.jpg"
          />
          <div>Phim 2</div>
        </Col>
      </Row>
    </div>
  );
}
export default Phim;
