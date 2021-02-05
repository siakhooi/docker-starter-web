FROM httpd:latest
LABEL maintainer="siakhooi@gmail.com"
LABEL name="Web Starter Kit - Under Construction"

RUN echo "Include \"/usr/local/apache2/conf/extra/extra1.conf\"" >> /usr/local/apache2/conf/httpd.conf
COPY extra1.conf /usr/local/apache2/conf/extra/extra1.conf
COPY www/ /usr/local/apache2/htdocs/

