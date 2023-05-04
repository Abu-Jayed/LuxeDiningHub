import React from "react";
import { Page, Text, Image, Document, StyleSheet } from "@react-pdf/renderer";
import LebronStretch from "../../assets/chef-1.png";

const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
  },
  text: {
    margin: 12,
    fontSize: 14,
    textAlign: "justify",
    fontFamily: "Times-Roman",
  },
  image: {
    marginVertical: 15,
    marginHorizontal: 100,
  },
  header: {
    fontSize: 12,
    marginBottom: 20,
    textAlign: "center",
    color: "grey",
  },
  pageNumber: {
    position: "absolute",
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "grey",
  },
});

const PDFFile = () => {
  return (
    <Document>
      <Page style={styles.body}>
        <Text style={styles.header} fixed></Text>
        <Image style={styles.image} src="https://pbs.twimg.com/profile_images/1589491553235456000/_Z0k6sbj_400x400.jpg" />
        <Text style={styles.text}>
        Q: What is the differences between uncontrolled and controlled components?

ans:In React, uncontrolled
                  components maintain their own state, while controlled
                  components receive updates from their parent components.
                  Uncontrolled components are simpler to use for basic form
                  inputs, but controlled components provide more predictability
                  and ease of debugging for complex forms. Choosing between
                  controlled and uncontrolled components depends on the form
                  requirements and desired level of control over the form's
                  state.


Q:2 How to validate React props using PropTypes


To validate React
                  props using PropTypes, import the PropTypes library, define
                  the expected props as an object in the component, and use
                  PropTypes to check the types of the passed props. For example,
                  PropTypes.string would check that a prop is a string, while
                  PropTypes.number.isRequired would check that a prop is a
                  required number.


Q4: What is the difference between nodejs and express js.

ans: Node.js is a runtime
                  environment for executing JavaScript outside of a web browser,
                  while Express.js is a web framework for Node.js. Node.js
                  provides the core functionality for running JavaScript on the
                  server-side, while Express.js provides additional features for
                  building web applications, such as routing, middleware, and
                  templating. While Node.js can be used without a framework,
                  Express.js simplifies and streamlines the development process
                  for building web applications with Node.js.
        </Text>
        <Text
          style={styles.pageNumber}
          render={({ pageNumber, totalPages }) =>
            `${pageNumber} / ${totalPages}`
          }
          fixed
        />
      </Page>
    </Document>
  );
};

export default PDFFile;