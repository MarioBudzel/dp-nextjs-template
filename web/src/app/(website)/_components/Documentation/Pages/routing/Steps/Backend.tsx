import CodeBlock from "@/components/common/CodeBlock";
import DocsBody from "../../../components/DocsBody";
import DocsSubtitle from "../../../components/DocsSubtitle";
import DocsTitle from "../../../components/DocsTitle";
import StyledText from "../../../components/StyledText";

const Backend: React.FC = () => {
  return (
    <div>
      <DocsTitle>Backend</DocsTitle>
      <DocsBody classname="my-2">
        To create a new route on the server, you need to follow these steps:
      </DocsBody>
      <DocsSubtitle>1. Creating the controller</DocsSubtitle>
      <DocsBody classname="my-2">
        First navigate to <StyledText>./api/src/controllers</StyledText>. Once
        there, create a controller file:
      </DocsBody>
      <CodeBlock language="bash" rounded>
        {`touch <route_name>Controller.js`}
      </CodeBlock>
      <DocsBody classname="my-2">Create a route handler method:</DocsBody>
      <CodeBlock language="javascript" rounded>
        {`exports.<method_name> = async (req, res) => {
  try {
    return res.status(200).send();
  } catch (error) {
    res
      .status(StatusCodes.BAD_REQUEST)
      .json();
  }
};`}
      </CodeBlock>
      <DocsSubtitle>2. Creating the Router object</DocsSubtitle>
      <DocsBody classname="my-2">
        Navigate to <StyledText>./api/src/routes</StyledText>. Once there,
        create a routes file:
      </DocsBody>
      <CodeBlock language="bash" rounded>
        {`touch <route_name>Routes.js`}
      </CodeBlock>
      <DocsBody classname="my-2">
        Create the routes and export the router:
      </DocsBody>
      <CodeBlock language="javascript" rounded>
        {`const express = require("express");
const {
<route_method>
} = require("../controllers/<route_name>Controller");

const router = express.Router();

router.post("/<route>", <route_method>);

// router.get("<route>", <route_method>);

module.exports = router;`}
      </CodeBlock>
      <DocsSubtitle>3. Assign the route</DocsSubtitle>
      <DocsBody classname="my-2">
        Navigate to <StyledText>./api/app.js</StyledText>. Once there, assign
        the created routes file:
      </DocsBody>
      <CodeBlock language="javascript" rounded>
        {`app.use("/<parent_route>", require("./src/routes/<route_name>Routes"));`}
      </CodeBlock>
      <DocsSubtitle>4. Hit the endpoint</DocsSubtitle>
      <DocsBody classname="my-2">
        Now you can use the pre-prepared axios api instance to hit your BE
        endpoint:
      </DocsBody>
      <CodeBlock language="javascript" rounded>
        {`import api from "@/api/api";
        
const response = await api.post("/<parent_route>/<route>", { payload });`}
      </CodeBlock>
    </div>
  );
};

export default Backend;
