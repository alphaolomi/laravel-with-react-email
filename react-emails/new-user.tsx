import { Html } from "@react-email/html";
import { Button } from "@react-email/button";
import { Container } from '@react-email/container';

import { Text } from "@react-email/text";
import * as React from "react";

export default function Email({ user , url }) {
    return (
        <Html>
               <Container>

            <Text>Hello, {user.name}</Text>
            <Button
                pX={20}
                pY={12}
                href="http://localhost:8000"
                style={{ background: "#000", color: "#fff" }}
                >
                Click me
            </Button>
            </Container>
        </Html>
    );
}
