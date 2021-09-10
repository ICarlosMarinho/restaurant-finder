import React from "react";

import { ErrorBoundaryContainer, ErrorText, ErrorTitle } from "./style";

interface ComponentProps {
  children: React.ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<ComponentProps, State> {
  state: State = {
    hasError: false,
  };

  constructor(props: ComponentProps) {
    super(props);
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.log(error, errorInfo);
  }

  render() {
    return this.state.hasError ? (
      <ErrorBoundaryContainer>
        <ErrorTitle>Ops! Algo deu errado.</ErrorTitle>
        <ErrorText>
          Entre em contato com os desenvolvedores ou tente novamente.
        </ErrorText>
      </ErrorBoundaryContainer>
    ) : (
      this.props.children
    );
  }
}

export default ErrorBoundary;
