import React, { Component } from 'react';
import * as Sentry from '@sentry/react';

/**
 * @description
 *  필수값을 입력하지 않았을 때
 *  프로퍼티의 타입이 다를 때
 * sentry서버에 에러 로그르 기록한다.
 * source map을 센트리에 올려야 센트리에서 minify된 코드를 읽기 쉽게 볼 수 있다.
 * @see https://sentry.io/welcome/
 */
class ErrorBoundary extends Component {
  state = {
    error: false,
  };

  componentDidCatch(error: Error, info: any) {
    console.error('에러가 발생했습니다.');

    this.setState({
      error: true,
    });

    if (process.env.NODE_ENV === 'production') {
      Sentry.captureException(error, { extra: info });
    }
  }

  render() {
    if (this.state.error) {
      return <h1>에러 발생</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
