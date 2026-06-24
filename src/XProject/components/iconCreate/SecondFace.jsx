function SecondFace({data}){
    return(
        <svg xmlns="http://www.w3.org/2000/svg" width="220" height="200" viewBox="0 0 220 200" fill="none">
            <rect width="220" height="190" rx="50" fill={data?.face}/>
            <mask id="path-2-inside-1_22_965" fill={data?.headTop}>
                <path d="M55 0H165V15C165 28.8071 153.807 40 140 40H80C66.1929 40 55 28.8071 55 15V0Z"/>
            </mask>
            <defs>
                <pattern
                    id="pattern0_344_267"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                >
                    <image
                        href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABLCAYAAAA4TnrqAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANXSURBVHgB7ZzPbhMxEMYdlEMj0WsUuBGpIDVSxAPAA3DjUbnxAPAAqBJIBSnc2qpXkMotyJu4nZ3435d1vPbu/KRqu02zm347Hs+Mx50sVudbtef1+xeKcnY9Uz6u7jcqBn5dzs8vt83x4u/E+3u/nm9b5x/ftq/7/esd9H6UqRIauPCcT99uxy0WtWSbVa7eLVrnncTiT0OrP2SSWZZ+MhfK7nO2n+/U5MNC1U5Vw/BgovijsvJMCdGIWAAiFkARPssV49DZNRTY5mB0cRYVXc/SCDIMAbyW9e/NQ+v8MvNUXRrZhqFJlimhfAyFpyepMwoZhgBVO/gf50/f2yw3NS2x+A1LmK5LQupZHrjPyyLWbPlKrS0/39zsjsuX7VnX1JZoFYPGRKkqGLbr+IYzJBb1EfzCrvLMkEhmWb769lr1g62m38VCYbHozWzW1HVRIIbUM1/s3yRxFkBjWc5Iep/ecF/VBzQ6X1lez1H/F8sCSB462KzUhAguuFWUOrMOJii1ZRuhetXjSnjkw4kSa2zxlAvxWQDVDsPNTbtp5Yy9zguXKRhVIq1zVMpjZjHfHR42v73vL0os46TRhYRciM8CELEAsgxDU6+KTUms1YACVpbEsgAGLZa2UF1eMV9dgYeh76ap1wG7YBaEL8lnCuWoIUGjxYppUI3F1ZVsQoZSuwQbsWroBdU1NZqjrudLlRrXQ5RK6REkDR2G3q0slgWQzLJ48S1H70Fuiq468H4wJAw4BQdiuWYEs6TOe6D6QqdQLh95qniv6noW+mBNjsqX9mJLQr2LxQtyDde7g96gx5tG+mTKHXPKwptrOIT2BZaKhA4AIhaAiAUgYgEMeinMxGG+RuJm07xtRt5Dl8dgsWI+QAgT/+hr5egK9M7wHqE4MgwD0OqpiAWQzGdxU9fdNjT4LCWn7EIVDr6ENk3N0WLxetUo++Bnodkh8v/PpELPmKXsIYIta2jJMULVQalZXzQugS+Pof1XIXoXK1SvurpXxTDVT4UOrVQeifs+XjPXbYyNLzqyO8a6hWSukkP9pQSlACIWgIgFIGIBjH6PtA4naN7qS60OWo5O0cpTCrTccsxCrAxDABELIJnPoqViTV+byGNx9Un4kvYqHLytfamPktB/bSoLGkRtyHcAAAAASUVORK5CYII="
                        x="0"
                        y="0"
                        width="75"
                        height="75"
                        preserveAspectRatio="none"
                        transform="matrix(0.0133333 0 0 0.0747566 0 -2.30337)"
                        crossOrigin="anonymous"
                    />
                </pattern>
                <pattern
                    id="grey_army"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                >
                    <image
                        href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABLCAYAAAA4TnrqAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMKSURBVHgB7Zw/bsIwFMbdqidAvQMnYKrUgYULMLLCiHoChp4AMcLKyAVYkTpxAu6AuEIrR7hyHontLzGO7bzf0iYqKXx5fn7/wst4PP4Vd2azmdA5n8/CxOVyES7Q61L2+33xc7lcGv9us9mUjq+nU+n4+3CAXo/yJpgCKjzl/fOz32KVLLnCqlfTaem4lVj0bkj1c8abZdn8xe12E6mT1DKkG8Xa4md88yoYZ1gsABYLIAqfpXbVlWF3tQW2IehdnNVGdF6GAEbLGo1GpeP1YiH6TLBlqJJlnavnOImmJ74zCl6GAEk7+K/t9v/3Ksv1TUks+g9j2K5jgutZBqjPCyLW8XgUw+Hw4bw697Pblc6HqmBUXce0nCGxdB9hu3COeLMsU327yqpCYKvpoxYKizUYDITpzbRtCrjg26JdPxPHWQCFZdVF0qoSSX1VF9DonBKi/s+WBeA9dKiyUpuDT6UrlE1Q2iTbcO2EK5zE0ncf1wvnCPssgGSX4cd8XjqmQyy0cOmDXiXSMkfVURuPOj+ZTIyvj0qs2EtC7LMAWCyAIMtQ1atcg89YJ27YsgCy3g2lheoBddu6GiyWqV51DTwvZaKqIWwTy1aLcxbLZUDVFd8VzFAUYqWQ9cua2rNr/nU3kSulDfDq4HOfVmbLAvBmWTSvy7GnGHWcZZoH66IX+SBW7bZ+P2/rsoRCplB1PvJZ8V7SETx6Y1WOSlt7epPVROdi0YKcjqyG0qGRLnl7ZsGtdjkk2vTg0AGAxQJgsQBYLICsi38qDjNtYraH5vX2GCyWyxuwoeIfea0QkbhrHGWDl6EFvXrKYgF481nU1ItURAs+Y8kp25CEg49hTFPSWCxar+rD3NaDWKbEtgtiKlXDlpVbcoyQdFCq+ovKJdCYDZ2/stG5WLZ6VVTLUN4VfWnR8cOmUN9Hr6vGGJt+RUrVIyTP8Ld6psJBKQCLBcBiAbBYAL1/RlqGE3reakqtkhk58oFebmnSiOVlCMBiAXjzWXqpWNLVQ+SuNHE9STj4qvGlLkpCf3Oa+2qqaI6GAAAAAElFTkSuQmCC"
                        x="0"
                        y="0"
                        width="75"
                        height="75"
                        preserveAspectRatio="none"
                        transform="matrix(0.0133333 0 0 0.0747566 0 -2.30337)"
                        crossOrigin="anonymous"
                    />
                </pattern>
            </defs>
            <path d="M55 0H165V15C165 28.8071 153.807 40 140 40H80C66.1929 40 55 28.8071 55 15V0Z" fill={data?.headTop}/>
            <path d="M55 0H165H55ZM166 15C166 29.3594 154.359 41 140 41H80C65.6406 41 54 29.3594 54 15H56C56 28.2548 66.7452 39 80 39H140C153.255 39 164 28.2548 164 15H166ZM80 41C65.6406 41 54 29.3594 54 15V0H56V15C56 28.2548 66.7452 39 80 39V41ZM166 0V15C166 29.3594 154.359 41 140 41V39C153.255 39 164 28.2548 164 15V0H166Z" fill={data?.face} mask="url(#path-2-inside-1_22_965)"/>
            <path d="M20 190H200C200 195.523 195.523 200 190 200H30C24.4772 200 20 195.523 20 190Z" fill={data?.faceDown}/>
        </svg>
    )
}

export default SecondFace