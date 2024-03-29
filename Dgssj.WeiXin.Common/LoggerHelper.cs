﻿using log4net;
using log4net.Config;
using log4net.Repository;
using System;
using System.Collections.Generic;
using System.IO;
using System.Text;

namespace Dgssj.WeiXin.Common
{
    public class LoggerHelper
    {
        private const string SError = "Error";

        private const string SDebug = "Debug";

        private const string DefaultName = "Info";

        public static ILoggerRepository repository { get; set; }

        static LoggerHelper()
        {
            repository = LogManager.CreateRepository("NETCoreRepository");
            var path = AppDomain.CurrentDomain.BaseDirectory + @"\log4net.config";
            XmlConfigurator.Configure(repository, new FileInfo("log4net.config"));
        }

        public static log4net.ILog GetLog(string logName)

        {

            var log = log4net.LogManager.GetLogger(repository.Name, logName);

            return log;

        }

        public static void Debug(string message)

        {

            var log = log4net.LogManager.GetLogger(repository.Name, SDebug);

            if (log.IsDebugEnabled)

                log.Debug(message);
        }

        public static void Debug(string message, Exception ex)

        {

            var log = log4net.LogManager.GetLogger(repository.Name, SDebug);

            if (log.IsDebugEnabled)

                log.Debug(message, ex);

        }

        public static void Error(string message)

        {

            var log = log4net.LogManager.GetLogger(repository.Name, SError);

            if (log.IsErrorEnabled)

                log.Error(message);

        }

        public static void Error(string message, Exception ex)

        {

            var log = log4net.LogManager.GetLogger(repository.Name, SError);

            if (log.IsErrorEnabled)

                log.Error(message, ex);

        }

        public static void Fatal(string message)

        {

            var log = log4net.LogManager.GetLogger(repository.Name, DefaultName);

            if (log.IsFatalEnabled)

                log.Fatal(message);

        }

        public static void Info(string message)

        {

            log4net.ILog log = log4net.LogManager.GetLogger(repository.Name, DefaultName);

            if (log.IsInfoEnabled)

                log.Info(message);

        }

        public static void Warn(string message)

        {

            var log = log4net.LogManager.GetLogger(repository.Name, DefaultName);

            if (log.IsWarnEnabled)

                log.Warn(message);

        }

    }
}
