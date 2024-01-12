import React,{ useRef } from 'react'
import { Col, Container, Row, Form,Button } from 'react-bootstrap'
import emailjs from 'emailjs-com';


function ContectForm() {

  const SERVICE_ID = "service_6u38ieu";
  const TEMPLATE_ID = "template_i061a0x";
  const PUBLIC_KEY = "xV5cTCwDisR7_MI8n";

  const form = useRef();
  const handleOnSubmit = (e) => {
    e.preventDefault();

    const senderName = e.target.name.value;
    const senderEmail = e.target.email.value;

    const templateParams = {
      sender_name: senderName,
      sender_email: senderEmail,
      message: e.target.message.value,
    };

    console.log(templateParams)

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });

    e.target.reset();
  };

  return (
    <section className='contectform'>
      <img className='exploreoverimg' src="./footerVector.png" alt="explore" />
      <div className='feature'>
        <svg xmlns="http://www.w3.org/2000/svg" width="226" height="216" viewBox="0 0 226 216" fill="none">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M225.996 107.686L215.615 108.713L206.84 109.564L199.386 110.279L193.023 110.889L187.573 111.418L182.89 111.885L178.856 112.304L175.378 112.688L172.376 113.045L169.787 113.385L167.559 113.713L165.647 114.035L164.016 114.357L162.634 114.681L161.477 115.014L160.523 115.356L159.754 115.713L159.155 116.086L158.714 116.479L158.42 116.894L158.264 117.335L158.24 117.804L158.34 118.303L158.561 118.837L158.897 119.407L159.345 120.016L159.902 120.668L160.566 121.365L161.335 122.111L162.207 122.909L163.18 123.762L164.252 124.672L165.421 125.643L166.685 126.678L168.041 127.779L169.486 128.949L171.016 130.19L172.627 131.504L174.314 132.891L176.068 134.353L177.884 135.889L179.753 137.498L181.663 139.178L183.604 140.927L185.562 142.74L187.524 144.611L189.474 146.534L191.395 148.501L193.268 150.503L195.076 152.527L196.799 154.562L198.415 156.594L199.907 158.609L201.253 160.59L202.436 162.522L203.436 164.388L204.239 166.17L204.83 167.853L205.198 169.42L205.333 170.857L205.229 172.15L204.885 173.287L204.3 174.257L203.479 175.055L202.428 175.673L201.158 176.109L199.682 176.364L198.016 176.439L196.177 176.338L194.184 176.07L192.058 175.642L189.82 175.066L187.491 174.353L185.093 173.518L182.647 172.573L180.172 171.534L177.687 170.415L175.209 169.231L172.754 167.996L170.336 166.726L167.968 165.432L165.66 164.127L163.421 162.823L161.259 161.53L159.18 160.259L157.188 159.018L155.286 157.814L153.477 156.655L151.762 155.546L150.14 154.493L148.612 153.501L147.177 152.574L145.832 151.715L144.577 150.928L143.409 150.215L142.326 149.58L141.325 149.024L140.405 148.552L139.562 148.165L138.795 147.866L138.102 147.66L137.48 147.549L136.928 147.538L136.445 147.633L136.029 147.84L135.68 148.164L135.399 148.616L135.184 149.204L135.037 149.94L134.959 150.837L134.952 151.912L135.019 153.184L135.163 154.675L135.39 156.412L135.704 158.427L136.114 160.759L136.627 163.454L137.254 166.566L138.009 170.165L138.907 174.332L139.967 179.168L141.214 184.798L142.675 191.375L144.387 199.095L146.394 208.199L146.425 211.759L142.48 202.731L139.152 195.083L136.326 188.574L133.908 183.011L131.826 178.244L130.023 174.147L128.451 170.623L127.073 167.59L125.857 164.982L124.777 162.744L123.813 160.831L122.947 159.206L122.163 157.836L121.45 156.698L120.795 155.768L120.19 155.028L119.626 154.465L119.097 154.064L118.596 153.817L118.117 153.713L117.655 153.747L117.205 153.912L116.763 154.204L116.325 154.62L115.886 155.156L115.443 155.81L114.992 156.58L114.53 157.466L114.052 158.466L113.557 159.58L113.039 160.806L112.495 162.145L111.923 163.594L111.318 165.152L110.677 166.818L109.997 168.589L109.275 170.462L108.508 172.432L107.694 174.495L106.829 176.644L105.911 178.871L104.94 181.167L103.913 183.521L102.831 185.921L101.694 188.353L100.502 190.801L99.2585 193.247L97.965 195.672L96.626 198.057L95.2464 200.378L93.8323 202.613L92.3909 204.74L90.9302 206.733L89.4595 208.571L87.9887 210.23L86.5284 211.689L85.0898 212.927L83.6843 213.927L82.3236 214.674L81.019 215.157L79.7814 215.365L78.6209 215.294L77.547 214.944L76.5676 214.317L75.6898 213.418L74.9186 212.259L74.258 210.853L73.71 209.215L73.275 207.366L72.9518 205.326L72.7379 203.118L72.6292 200.766L72.6203 198.293L72.7048 195.725L72.8755 193.085L73.1244 190.396L73.4431 187.68L73.8228 184.957L74.2546 182.247L74.7296 179.567L75.2392 176.931L75.7748 174.354L76.3283 171.847L76.8921 169.419L77.4589 167.079L78.022 164.833L78.5752 162.686L79.1127 160.642L79.6293 158.704L80.1202 156.872L80.5808 155.149L81.0071 153.534L81.3952 152.026L81.7417 150.625L82.0431 149.329L82.2961 148.137L82.4974 147.048L82.6436 146.061L82.7314 145.173L82.7569 144.385L82.7163 143.694L82.6052 143.101L82.4186 142.606L82.1511 142.209L81.7963 141.911L81.347 141.714L80.795 141.621L80.1304 141.634L79.3421 141.76L78.4168 142.004L77.3391 142.372L76.0907 142.875L74.65 143.524L72.9916 144.331L71.0849 145.314L68.8935 146.492L66.3735 147.889L63.472 149.535L60.1248 151.465L56.2531 153.722L51.7607 156.36L46.5279 159.443L40.406 163.052L33.2082 167.29L24.6977 172.282L26.9642 169.313L33.9291 163.136L39.8429 157.905L44.8845 153.448L49.1959 149.632L52.8913 146.347L56.0627 143.507L58.7849 141.043L61.1189 138.896L63.115 137.02L64.8143 135.376L66.2509 133.932L67.4533 132.661L68.4447 131.541L69.2448 130.553L69.8697 129.68L70.3328 128.909L70.6451 128.228L70.8156 127.626L70.8518 127.096L70.7596 126.629L70.5435 126.218L70.2073 125.858L69.7536 125.542L69.1843 125.266L68.5008 125.026L67.7038 124.817L66.7935 124.635L65.77 124.477L64.633 124.338L63.3823 124.216L62.0174 124.106L60.5382 124.005L58.9448 123.91L57.2375 123.816L55.4173 123.721L53.4857 123.619L51.4453 123.507L49.2993 123.382L47.0524 123.238L44.7102 123.071L42.28 122.877L39.7706 122.651L37.1925 122.39L34.5579 122.089L31.8811 121.743L29.178 121.35L26.4665 120.905L23.7661 120.406L21.0983 119.85L18.4855 119.235L15.9518 118.561L13.5216 117.827L11.2201 117.035L9.07234 116.185L7.10269 115.281L5.33457 114.326L3.78974 113.326L2.48783 112.285L1.44581 111.212L0.677528 110.112L0.193388 108.994L0 107.866L0.100024 106.737L0.492082 105.615L1.17081 104.509L2.12698 103.426L3.34781 102.374L4.81727 101.361L6.51654 100.391L8.42447 99.4704L10.5181 98.6029L12.7734 97.7918L15.1652 97.0391L17.6687 96.3459L20.2589 95.7124L22.9118 95.1378L25.6041 94.6207L28.3143 94.1588L31.0221 93.7494L33.7091 93.389L36.3588 93.074L38.9563 92.8005L41.4888 92.5642L43.9452 92.3607L46.3163 92.1857L48.5943 92.0349L50.773 91.9037L52.8475 91.7881L54.814 91.6837L56.6699 91.5866L58.4133 91.4928L60.0431 91.3984L61.5587 91.2998L62.9599 91.1933L64.247 91.0753L65.4202 90.9422L66.4798 90.7905L67.4261 90.6165L68.2592 90.4165L68.979 90.1866L69.5847 89.9227L70.0754 89.6203L70.4493 89.2747L70.704 88.8806L70.8361 88.4321L70.8414 87.9227L70.7144 87.3449L70.4482 86.6903L70.0342 85.9492L69.4622 85.1102L68.7195 84.1602L67.791 83.0841L66.6581 81.8636L65.2989 80.4775L63.6867 78.9005L61.7893 77.1022L59.5679 75.0462L56.9754 72.6883L53.9545 69.975L50.4351 66.8405L46.3311 63.204L41.5361 58.9648L35.9175 53.9972L29.3095 48.1426L21.6644 41.3175L30.6527 46.5816L38.2402 51.0442L44.6825 54.8419L50.1807 58.0831L54.8947 60.8548L58.9526 63.2268L62.4576 65.2557L65.4935 66.9878L68.1288 68.4608L70.4197 69.7059L72.4128 70.7485L74.1468 71.6098L75.6538 72.3072L76.9609 72.8552L78.0909 73.2657L79.0629 73.5482L79.8933 73.7108L80.596 73.7598L81.1828 73.7001L81.6638 73.5359L82.0478 73.2698L82.3424 72.904L82.5542 72.4399L82.6888 71.8781L82.7514 71.2187L82.7464 70.4614L82.6781 69.6054L82.5501 68.6499L82.366 67.5934L82.1291 66.4347L81.8428 65.1723L81.5103 63.8049L81.135 62.3311L80.7205 60.75L80.2704 59.061L79.7887 57.2641L79.2798 55.3596L78.7484 53.3491L78.1996 51.2347L77.639 49.0198L77.0726 46.709L76.5071 44.3084L75.9495 41.8254L75.4073 39.2693L74.8886 36.6511L74.4016 33.9834L73.9551 31.2811L73.5578 28.5607L73.2188 25.8405L72.9467 23.1405L72.7502 20.4822L72.6374 17.8884L72.6158 15.3828L72.6921 12.9895L72.872 10.7329L73.16 8.63688L73.5592 6.72458L74.0712 5.01761L74.6961 3.53571L75.4323 2.29618L76.2767 1.31345L77.2244 0.598716L78.269 0.159604L79.4029 0L80.617 0.119941L81.9015 0.515629L83.2455 1.17956L84.6379 2.10074L86.0672 3.26503L87.5218 4.65547L88.9905 6.25283L90.4624 8.03601L91.9273 9.98258L93.3758 12.0693L94.7994 14.2726L96.1907 16.569L97.5432 18.9355L98.8517 21.3501L100.112 23.7917L101.32 26.2409L102.475 28.6796L103.575 31.0915L104.619 33.4618L105.608 35.7777L106.542 38.0278L107.424 40.2024L108.254 42.2933L109.036 44.2937L109.772 46.1981L110.465 48.0018L111.118 49.7015L111.734 51.2944L112.316 52.7785L112.868 54.1522L113.394 55.4143L113.897 56.564L114.38 57.6005L114.846 58.5229L115.3 59.3304L115.745 60.0217L116.185 60.5954L116.623 61.0495L117.064 61.3813L117.51 61.5874L117.968 61.6636L118.441 61.6045L118.935 61.4036L119.454 61.0529L120.006 60.5425L120.597 59.8607L121.235 58.9932L121.929 57.9231L122.689 56.6299L123.528 55.0891L124.459 53.2713L125.499 51.1413L126.669 48.6565L127.993 45.7655L129.499 42.4059L131.224 38.5018L133.211 33.9599L135.515 28.6656L138.202 22.4765L141.359 15.2148L145.093 6.65664L147.104 3.93435L144.992 13.5418L143.191 21.6731L141.654 28.5913L140.343 34.5044L139.226 39.5783L138.278 43.9464L137.48 47.7164L136.814 50.976L136.265 53.7972L135.824 56.2392L135.48 58.3507L135.226 60.1727L135.056 61.7389L134.965 63.0778L134.949 64.2133L135.004 65.1654L135.129 65.9512L135.323 66.585L135.583 67.0788L135.911 67.4429L136.305 67.6862L136.767 67.8159L137.296 67.8385L137.896 67.7592L138.567 67.5827L139.31 67.3131L140.128 66.9538L141.024 66.5081L141.999 65.9787L143.055 65.3685L144.196 64.6801L145.423 63.9162L146.739 63.0798L148.145 62.174L149.643 61.2022L151.235 60.1685L152.92 59.0772L154.7 57.9335L156.572 56.7432L158.536 55.5129L160.588 54.2502L162.724 52.9634L164.939 51.662L167.226 50.3563L169.576 49.0575L171.979 47.7779L174.424 46.5305L176.896 45.329L179.38 44.1878L181.861 43.1216L184.318 42.1451L186.734 41.273L189.087 40.5197L191.356 39.8986L193.52 39.4224L195.558 39.1022L197.448 38.9475L199.171 38.9659L200.71 39.1628L202.047 39.5412L203.169 40.1017L204.064 40.8424L204.725 41.7586L205.146 42.8434L205.326 44.0876L205.266 45.4799L204.972 47.0072L204.451 48.6549L203.714 50.4075L202.775 52.2484L201.649 54.161L200.352 56.1285L198.905 58.1343L197.326 60.1626L195.635 62.1983L193.852 64.2274L191.998 66.2371L190.09 68.2161L188.147 70.1543L186.187 72.0431L184.226 73.8752L182.278 75.6448L180.357 77.3473L178.474 78.9794L176.641 80.5387L174.865 82.0241L173.157 83.4351L171.521 84.7721L169.964 86.036L168.492 87.2284L167.107 88.3513L165.813 89.4071L164.614 90.3982L163.511 91.3276L162.506 92.1982L161.602 93.0131L160.8 93.7752L160.102 94.4878L159.511 95.1538L159.027 95.7765L158.655 96.3586L158.398 96.9033L158.259 97.4134L158.243 97.8917L158.356 98.3411L158.605 98.7643L158.998 99.1641L159.545 99.5433L160.258 99.9048L161.152 100.251L162.242 100.587L163.55 100.913L165.099 101.236L166.917 101.557L169.041 101.883L171.509 102.218L174.373 102.569L177.692 102.943L181.539 103.35L186.004 103.8L191.196 104.307L197.25 104.889L204.334 105.568L212.66 106.372L222.494 107.338L225.996 107.686Z" fill="url(#paint0_linear_254_103)" />
          <defs>
            <linearGradient id="paint0_linear_254_103" x1="37.4158" y1="122.525" x2="252.71" y2="56.7805" gradientUnits="userSpaceOnUse">
              <stop stop-color="#C7E3D1" />
              <stop offset="1" stop-color="#D142BA" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="contect-form">
        <h4 className='text-center'>Lets Connect with me👋</h4>
        <Container>
          <Row className='align-center'>
          <Col md={6}>
              <div>
                <Form ref={form} onSubmit={handleOnSubmit}>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="text" name="name" placeholder="" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                    <Form.Label>Your Email</Form.Label>
                    <Form.Control type="email" name="email" placeholder="" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Your message</Form.Label>
                    <Form.Control as="textarea" name="message" rows={3} placeholder='Type your message here' />
                  </Form.Group>

                  <Button className='custom_from_btn' type='submit'>Submit</Button>
                </Form>
              </div>
            </Col>
            <Col md={6}>
              <div className='right-form'>



                <svg xmlns="http://www.w3.org/2000/svg" width="547" height="500" viewBox="0 0 547 500" fill="none">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M504.975 249.737L504.971 252.609L505.055 255.484L505.241 258.369L505.54 261.268L505.959 264.189L506.507 267.139L507.188 270.125L508.006 273.154L508.961 276.234L510.051 279.371L511.271 282.572L512.614 285.843L514.07 289.189L515.628 292.615L517.274 296.123L518.993 299.716L520.767 303.395L522.579 307.16L524.413 311.01L526.256 314.946L528.097 318.965L529.925 323.068L531.73 327.252L533.5 331.516L535.222 335.855L536.884 340.265L538.469 344.741L539.964 349.274L541.352 353.858L542.618 358.483L543.745 363.139L544.719 367.814L545.523 372.497L546.145 377.174L546.569 381.832L546.785 386.458L546.78 391.036L546.546 395.552L546.075 399.993L545.362 404.345L544.402 408.593L543.193 412.726L541.737 416.731L540.035 420.598L538.092 424.318L535.914 427.881L533.509 431.282L530.887 434.515L528.06 437.578L525.04 440.467L521.842 443.184L518.48 445.729L514.971 448.107L511.33 450.322L507.576 452.381L503.725 454.293L499.793 456.065L495.799 457.711L491.757 459.24L487.684 460.665L483.594 462L479.5 463.259L475.416 464.454L471.352 465.601L467.318 466.712L463.323 467.801L459.372 468.879L455.472 469.959L451.626 471.051L447.836 472.165L444.103 473.306L440.425 474.483L436.801 475.697L433.227 476.953L429.699 478.25L426.211 479.587L422.757 480.959L419.33 482.361L415.924 483.786L412.53 485.223L409.141 486.662L405.75 488.091L402.35 489.495L398.935 490.859L395.499 492.169L392.037 493.41L388.547 494.564L385.025 495.62L381.471 496.563L377.885 497.383L374.268 498.073L370.624 498.626L366.956 499.037L363.267 499.3L359.561 499.41L355.842 499.363L352.115 499.155L348.384 498.78L344.653 498.234L340.928 497.513L337.215 496.613L333.519 495.534L329.847 494.275L326.204 492.84L322.598 491.233L319.034 489.462L315.519 487.534L312.057 485.462L308.655 483.259L305.316 480.939L302.044 478.52L298.841 476.02L295.71 473.456L292.651 470.85L289.663 468.221L286.745 465.589L283.895 462.974L281.108 460.395L278.38 457.872L275.705 455.421L273.077 453.061L270.49 450.804L267.934 448.666L265.403 446.657L262.887 444.788L260.378 443.067L257.867 441.499L255.346 440.089L252.806 438.838L250.238 437.747L247.635 436.815L244.99 436.037L242.296 435.408L239.547 434.923L236.738 434.572L233.864 434.347L230.921 434.237L227.908 434.231L224.822 434.318L221.662 434.484L218.427 434.718L215.119 435.007L211.738 435.337L208.285 435.696L204.765 436.072L201.178 436.452L197.53 436.826L193.823 437.181L190.062 437.509L186.25 437.798L182.393 438.041L178.495 438.229L174.561 438.354L170.595 438.411L166.603 438.392L162.59 438.292L158.56 438.106L154.518 437.829L150.47 437.457L146.422 436.987L142.378 436.414L138.346 435.734L134.332 434.944L130.343 434.038L126.39 433.012L122.48 431.86L118.628 430.576L114.847 429.151L111.152 427.578L107.56 425.85L104.086 423.962L100.741 421.913L97.5361 419.702L94.4787 417.334L91.5733 414.815L88.8214 412.153L86.2219 409.358L83.7706 406.442L81.4607 403.417L79.2828 400.297L77.2254 397.097L75.275 393.829L73.4166 390.509L71.6338 387.148L69.9093 383.76L68.2254 380.356L66.5642 376.946L64.9077 373.538L63.2388 370.14L61.541 366.757L59.7992 363.394L57.9999 360.052L56.1313 356.732L54.1836 353.433L52.1494 350.153L50.0238 346.888L47.8043 343.633L45.4912 340.383L43.0874 337.13L40.5988 333.868L38.0338 330.589L35.4033 327.285L32.7211 323.948L30.003 320.571L27.2671 317.146L24.5337 313.667L21.8243 310.129L19.1624 306.526L16.5723 302.855L14.0793 299.113L11.7093 295.3L9.48807 291.416L7.44163 287.462L5.59532 283.442L3.97371 279.361L2.60025 275.223L1.49693 271.038L0.684005 266.814L0.179712 262.56L0 258.288L0.158316 254.009L0.665397 249.737L1.5291 245.484L2.75427 241.264L4.34262 237.091L6.29271 232.978L8.59987 228.939L11.2563 224.987L14.2509 221.135L17.5698 217.393L21.1961 213.773L25.1103 210.283L29.2903 206.933L33.7119 203.727L38.3489 200.671L43.1736 197.768L48.1572 195.02L53.2699 192.426L58.4819 189.985L63.7635 187.693L69.086 185.546L74.4218 183.537L79.7448 181.659L85.0301 179.903L90.2543 178.262L95.3952 176.723L100.432 175.277L105.344 173.911L110.113 172.613L114.721 171.368L119.151 170.162L123.389 168.98L127.42 167.806L131.231 166.625L134.812 165.42L138.153 164.175L141.248 162.873L144.091 161.499L146.679 160.037L149.011 158.472L151.088 156.79L152.914 154.978L154.494 153.024L155.837 150.918L156.952 148.651L157.851 146.217L158.55 143.609L159.063 140.825L159.408 137.863L159.605 134.725L159.673 131.413L159.633 127.932L159.509 124.29L159.321 120.496L159.094 116.56L158.849 112.496L158.609 108.318L158.396 104.041L158.23 99.6842L158.132 95.2644L158.121 90.8007L158.212 86.3125L158.424 81.8197L158.768 77.3418L159.257 72.8982L159.901 68.5078L160.708 64.1886L161.684 59.9576L162.833 55.8305L164.157 51.8217L165.656 47.944L167.328 44.2082L169.171 40.6236L171.178 37.1974L173.345 33.935L175.664 30.8398L178.126 27.9136L180.723 25.1564L183.446 22.5666L186.284 20.1412L189.229 17.8761L192.269 15.7666L195.397 13.8071L198.603 11.9916L201.878 10.3145L205.216 8.77018L208.608 7.3537L212.049 6.06113L215.534 4.88975L219.057 3.8383L222.616 2.90721L226.206 2.09874L229.824 1.417L233.468 0.866979L237.135 0.451797L240.82 0.171577L244.517 0.0231188L248.221 0L251.927 0.0931858L255.629 0.291474L259.322 0.582083L263.001 0.951195L266.662 1.38443L270.303 1.86727L273.921 2.38543L277.515 2.92515L281.084 3.47346L284.629 4.01839L288.15 4.54915L291.65 5.05618L295.13 5.53129L298.594 5.96766L302.044 6.35988L305.483 6.70392L308.916 6.99716L312.345 7.23827L315.774 7.42722L319.208 7.56518L322.648 7.65445L326.099 7.69837L329.562 7.70128L333.042 7.6684L336.539 7.60575L340.056 7.52008L343.593 7.41879L347.152 7.30986L350.733 7.20177L354.335 7.10342L357.958 7.02409L361.599 6.97336L365.258 6.96102L368.93 6.99706L372.613 7.09154L376.303 7.25457L379.995 7.49625L383.684 7.82653L387.365 8.25521L391.03 8.79179L394.673 9.44546L398.288 10.2249L401.865 11.1384L405.397 12.1934L408.876 13.3968L412.293 14.7545L415.64 16.2715L418.907 17.9517L422.087 19.798L425.171 21.8119L428.151 23.9935L431.021 26.3416L433.773 28.8535L436.402 31.5248L438.904 34.3498L441.274 37.3209L443.511 40.4292L445.614 43.6644L447.584 47.0147L449.423 50.4669L451.135 54.0067L452.727 57.6188L454.206 61.287L455.582 64.9947L456.864 68.7253L458.065 72.4621L459.198 76.1895L460.276 79.8927L461.312 83.5587L462.32 87.1767L463.309 90.7381L464.289 94.2374L465.268 97.6715L466.252 101.04L467.244 104.342L468.249 107.581L469.269 110.757L470.307 113.873L471.366 116.933L472.446 119.938L473.549 122.892L474.677 125.799L475.829 128.661L477.006 131.483L478.209 134.268L479.436 137.019L480.687 139.742L481.959 142.44L483.252 145.116L484.561 147.776L485.884 150.424L487.216 153.064L488.554 155.7L489.891 158.337L491.222 160.978L492.541 163.627L493.841 166.287L495.115 168.963L496.356 171.656L497.556 174.369L498.708 177.104L499.805 179.863L500.84 182.647L501.805 185.455L502.696 188.288L503.506 191.145L504.231 194.025L504.867 196.926L505.413 199.846L505.866 202.782L506.227 205.732L506.497 208.692L506.68 211.66L506.78 214.631L506.803 217.603L506.756 220.572L506.649 223.536L506.491 226.492L506.294 229.438L506.071 232.372L505.835 235.293L505.6 238.202L505.382 241.099L505.195 243.986L505.054 246.864L504.975 249.737Z" fill="url(#paint0_linear_254_105)" />
                  <defs>
                    <linearGradient id="paint0_linear_254_105" x1="-408.401" y1="186.957" x2="-619.822" y2="-274.886" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#B38DC5" />
                      <stop offset="1" stop-color="#D59FEE" />
                    </linearGradient>
                  </defs>
                </svg>

              </div>





            </Col>
          </Row>
        </Container>



        <Container>
          <div className='footer-box'>
            <div className='left-footer'>© 2024 - Dipesh singh</div>
            <div className='right-footer'>
              <a href='#'><svg xmlns="http://www.w3.org/2000/svg" width="58" height="58" viewBox="0 0 58 58" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M53.1667 28.9999C53.1667 42.3467 42.3468 53.1666 29 53.1666C15.6532 53.1666 4.83337 42.3467 4.83337 28.9999C4.83337 15.653 15.6532 4.83325 29 4.83325C42.3468 4.83325 53.1667 15.653 53.1667 28.9999ZM40.0502 22.6803C40.6701 23.061 41.0725 23.7461 41.0725 24.5291L41.0834 35.4041C41.0834 36.6003 40.1046 37.5791 38.9084 37.5791H21.5084C20.3121 37.5791 19.3334 36.6003 19.3334 35.4041V24.5291C19.3334 23.7461 19.7466 23.061 20.3665 22.6803L30.2084 16.9166L40.0502 22.6803ZM38.8975 24.54V24.5291L30.2084 19.4396L21.5083 24.5291L30.2084 29.9666L38.8975 24.54ZM21.5083 35.4041V27.0738L30.2084 32.5331L38.8975 27.1065L38.9084 35.4041H21.5083Z" fill="#B38DC4" />
              </svg></a>
              <a href='#'><svg xmlns="http://www.w3.org/2000/svg" width="50" height="47" viewBox="0 0 50 47" fill="none">
                <path d="M25 0C11.1914 0 0 10.4333 0 23.3065C0 36.1796 11.1914 46.6129 25 46.6129C38.8086 46.6129 50 36.1796 50 23.3065C50 10.4333 38.8086 0 25 0ZM18.0078 33.0569H13.1348V18.5177H18.0078V33.0569ZM15.4395 16.6969H15.4004C13.6328 16.6969 12.4902 15.5862 12.4902 14.1751C12.4902 12.7366 13.6719 11.6532 15.4687 11.6532C17.2656 11.6532 18.3691 12.7366 18.4082 14.1751C18.418 15.5771 17.2754 16.6969 15.4395 16.6969ZM37.5 33.0569H31.9727V25.537C31.9727 23.5705 31.1133 22.2231 29.209 22.2231C27.7539 22.2231 26.9434 23.1335 26.5723 24.0075C26.4355 24.317 26.4551 24.754 26.4551 25.2001V33.0569H20.9766C20.9766 33.0569 21.0449 19.7285 20.9766 18.5177H26.4551V20.8028C26.7773 19.8014 28.5254 18.3811 31.3184 18.3811C34.7852 18.3811 37.5 20.4751 37.5 24.9725V33.0569Z" fill="#B38DC4" />
              </svg></a>
              <a href='#'><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                <g clip-path="url(#clip0_259_169)">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M25 1C38.8075 1 50 12.4748 50 26.6323C50 37.9548 42.845 47.5599 32.9175 50.9524C31.65 51.2049 31.2 50.4044 31.2 49.7219C31.2 48.8769 31.23 46.117 31.23 42.687C31.23 40.297 30.43 38.7371 29.5325 37.9421C35.1 37.3071 40.95 35.1394 40.95 25.2944C40.95 22.4944 39.98 20.2096 38.375 18.4146C38.635 17.7671 39.4925 15.1599 38.13 11.6299C38.13 11.6299 36.035 10.9431 31.2625 14.2581C29.265 13.6906 27.125 13.405 25 13.395C22.875 13.405 20.7375 13.6906 18.7425 14.2581C13.965 10.9431 11.865 11.6299 11.865 11.6299C10.5075 15.1599 11.365 17.7671 11.6225 18.4146C10.025 20.2096 9.04751 22.4944 9.04751 25.2944C9.04751 35.1144 14.885 37.3154 20.4375 37.9629C19.7225 38.6029 19.075 39.7319 18.85 41.3894C17.425 42.0444 13.805 43.178 11.575 39.2605C11.575 39.2605 10.2525 36.7977 7.7425 36.6177C7.7425 36.6177 5.305 36.5853 7.5725 38.1753C7.5725 38.1753 9.21 38.9628 10.3475 41.9253C10.3475 41.9253 11.815 46.5002 18.77 44.9502C18.7825 47.0927 18.805 49.1119 18.805 49.7219C18.805 50.3994 18.345 51.1923 17.0975 50.9548C7.16249 47.5673 0 37.9573 0 26.6323C0 12.4748 11.195 1 25 1Z" fill="#B38DC4" />
                </g>
                <defs>
                  <clipPath id="clip0_259_169">
                    <rect width="50" height="50" fill="white" />
                  </clipPath>
                </defs>
              </svg></a>
            </div>
          </div>
        </Container>

      </div>






    </section >
  )
}

export default ContectForm